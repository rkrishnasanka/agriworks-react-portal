import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

type DataItem = {
  day: string;
  count: number;
  date: Date;
}

type ChartDefaults = {
  width: number;
  height: number;
  chartId: string;
  title: string;
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number
  };
  gridOpacity: number;
}

interface LineChartProps {
  data: DataItem[];
  chartDefaults: ChartDefaults;
}

export default function LineChart({ data, chartDefaults }: LineChartProps) {

    const [line, setLine] = useState("");
    const [translate, setTranslate] = useState(`translate(${chartDefaults.margin.left}, ${chartDefaults.margin.top})`);
    const [trnsY, setTrnsY] = useState("translate(0,0)");
    const [trnsX, setTrnsX] = useState("");

    useEffect(() => {
      // parse and set date of each data item
      const parseDate = d3.timeParse("%m-%d-%Y");

      data.forEach((d) => {
        // TODO: Figure out how to fix this
      });

      calculatePath();
      setTrnsX(getTrnsx());
    }, [data, chartDefaults, line, translate, trnsY, trnsX]);

    // method implementations here

    const getScales = () => {
      // ... implementation here
    };

    const getLine = () => {
      // ... implementation here
    };

    const getTrnsy = () => {
      return `translate(0,0)`;
    };

    const getTrnsx = () => {
      return `translate(0,${chartDefaults.height})`;
    };

    const calculatePath = () => {
      // ... implementation here
    };

    return (
       <>
       Figure out the chart implementation here
       </>
    );
}
