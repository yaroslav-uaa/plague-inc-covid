import React, { useRef, useState, useEffect } from 'react';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { Button } from '@mui/material';
import './player.scss';

const FIRST_STEP = 0;

interface Props {
    themeSongs: Song[];
}

export type Song = {
    url: string;
};

export const Player = ({ themeSongs }: Props) => {
    const [step, setStep] = useState<number>(FIRST_STEP);
    const [playStatus, setPlayStatus] = useState<boolean>(false);

    const song = themeSongs[step]?.url;
    const audio = useRef<HTMLAudioElement>(new Audio(song));

    const turnOnNext = () => {
        if (step + 1 < themeSongs?.length) {
            handleSteps(+1);
        } else {
            audio.current.pause();
        }
    };

    useEffect(() => {
        audio.current.addEventListener('ended', turnOnNext);
        return () => {
            audio.current.addEventListener('ended', turnOnNext);
        };
    }, []);

    const startPlaying = (status: boolean) => {
        setPlayStatus(status);
        status ? audio.current.play() : audio.current.pause();
    };

    const handleSteps = (stepPosition: number) => {
        const next = step + stepPosition;
        setStep(next);
        if (step === 2) {
            audio.current.src = themeSongs[0]?.url;
        }
        audio.current.src = themeSongs[next]?.url;

        if (playStatus) {
            audio.current.play();
        }
    };

    return (
        <Button
            className="player__button"
            onClick={() => startPlaying(!playStatus)}
        >
            {playStatus ? <BsFillVolumeUpFill size={30} /> : <BsFillVolumeMuteFill size={30} />}
        </Button>
    );
};
