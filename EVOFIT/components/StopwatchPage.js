import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { global } from '../styles/GlobalStyles';
import { styles } from '../styles/StopwatchStyles';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  }

  const startPauseTimer = () => {
    if (running) { // Pause
      clearInterval(timerRef.current);
    } else { // Play
      let startTime = Date.now() - time;

      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;

        if (elapsed >= 60 * 60 * 1000) {
          startTime = Date.now();
          setTime(0);
        } else
          setTime(elapsed);
      }, 10); // Every 10ms
    }

    setRunning(!running);
  }

  const addLap = () => {
    const interval = (laps.length !== 0) ? (time - laps[laps.length - 1].time) : time;

    const newLaps = [...laps, { id: laps.length + 1, time: time, interval: interval }];
    setLaps(newLaps);
  };

  return (
    <View style={[global.container, { padding: 20 }]}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>

      <View style={global.hr}>
        <View style={global.line} />
        <Text style={global.hrText}>Laps</Text>
        <View style={global.line} />
      </View>

      <ScrollView style={styles.lapList}>
        {laps.map((lap) => (
          <Text key={lap.id} style={styles.lapText}>
            # {lap.id.toString().padStart(2, '0')}           {formatTime(lap.time)}           {formatTime(lap.interval)}
          </Text>
        ))}
      </ScrollView>
      
      <View style={global.hr}>
        <View style={global.line} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={addLap} style={styles.circleButton} disabled={!running}>
          <Text style={[global.text, { color: 'white' }]}>Lap</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={startPauseTimer} style={styles.circleButton}>
          <Text style={[global.text, { color: 'white' }]}>{running ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetTimer} style={styles.circleButton}>
          <Text style={[global.text, { color: 'white' }]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatTime = (timeMs) => {
  const minutes = Math.floor(timeMs / 60000);
  const seconds = Math.floor((timeMs % 60000) / 1000);
  const milliseconds = Math.floor((timeMs % 1000) / 10);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
};

export default Stopwatch;
