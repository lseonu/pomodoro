import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import { PlayerPause, PlayerPlay, PlayerStop } from 'tabler-icons-react';

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId!);
    }
    return () => clearInterval(intervalId!);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <div
        css={css`
          font-size: 100px;
          font-weight: bold;
        `}
      >
        {formatTime(time)}
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <button onClick={handleStartStop} style={{border: "none", background: "none", cursor: "pointer"}}>{isRunning ? <PlayerStop size={25} strokeWidth={2} /> : <PlayerPlay size={25} strokeWidth={2} />}</button>
        <button onClick={handlePause} disabled={!isRunning} style={{border: "none", background: "none", cursor: "pointer"}}><PlayerPause size={25} strokeWidth={2} /></button>
      </div>
    </div>
  );
};
