import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Ship from "./Ships";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Square from "./Square";

export default function Board({}) {
  // Initial state of board
  const [board, setBoard] = useState(() => [
    [null, null, null, null, null, null, null, null, null, null],
    [null, "s1", "s1", null, null, null, null, null, null, null],
    [null, null, null, null, null, "s2", null, null, null, null],
    [null, null, null, null, null, "s2", null, null, null, null],
    [null, null, null, null, null, "s2", null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, "s4", null, null, null, null, null, null, null, null],
    [null, "s4", null, null, null, null, null, "s3", "s3", "s3"],
    [null, "s4", null, null, null, null, null, null, null, null],
    [null, "s4", null, null, null, null, null, null, null, null],
  ]);

  //const [status, setStatus] = useState("");

  // If square is pressed, check if it is null
  // board[x][y] === null ? "miss" : "hit"
  // setBoard = "O" (miss), else "X" for hit
  //let newBoard = [...board];

  // 12:39AM: Try using the Square component to handle coordinates

  return (
    <View style={styles.container}>
      {board.map((row, x) =>
        row.map((col, y) => (
          <View key={`${x}${y + 1}`} style={styles.grid}>
            <Square key={`${x}+${y}`} x={x} y={y} status={col} />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 10,
  },
  grid: {
    width: 40,
    height: 40,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
