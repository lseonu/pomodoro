import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import { PlayerPlay, PlayerStop, CircleX } from 'tabler-icons-react';

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const [showResetWarning, setShowResetWarning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setShowDropdown(false);
    } else {
      clearInterval(intervalId!);
      setShowDropdown(true);
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
    if (selectedActivity !== "") {
      setIsRunning(prevIsRunning => !prevIsRunning);
    }
  };

  const handleReset = () => {
    setShowResetWarning(true);
  };

  const confirmReset = () => {
    setTime(0);
    setIsRunning(false);
    setSelectedActivity("");
    setShowResetWarning(false);
  };

  const handleCancelReset = () => {
    setShowResetWarning(false);
  };

  const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedActivity(event.target.value);
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
      {showDropdown && (
        <select value={selectedActivity} onChange={handleActivityChange} style={{marginBottom: "10px"}}>
          <option value="">Select Activity</option>
          <option value="Study">Study</option>
          <option value="Exercise">Exercise</option>
          <option value="Read">Read</option>
        </select>
      )}
      {selectedActivity !== "" && !showDropdown && (
        <div css={css`margin-bottom: 10px; font-size: 24px; font-weight: bold;`}>{selectedActivity}</div>
      )}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            font-size: 100px;
            font-weight: bold;
            margin-bottom: 20px;
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
          <button onClick={handleStartStop} disabled={selectedActivity === ""} style={{border: "none", background: "none", cursor: "pointer"}}>{isRunning ? <PlayerStop size={25} strokeWidth={2} /> : <PlayerPlay size={25} strokeWidth={2} />}</button>
          <button onClick={handleReset} disabled={isRunning || time === 0} style={{border: "none", background: "none", cursor: "pointer"}}><CircleX size={25} strokeWidth={2} /></button>
        </div>
        {showResetWarning && (
          <div css={css`margin-top: 10px;`}>
            <p>Your record will be deleted and the timer will be reset.</p>
            <button onClick={confirmReset} style={{marginRight: "10px"}}>Okay</button>
            <button onClick={handleCancelReset}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
};
