import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";

interface AxisProps {
    scales: () => any,
    chartDefaults: object,
    data: [],
    trns: string
}

export default function Axis({ scales, chartDefaults, data, trns }: AxisProps) {

    const axisRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if(axisRef.current) {
            const node = axisRef.current;
            d3.select(node).call(scales);
        }
    }, [scales]);

    return (
        <g transform={trns}>
            <g ref={axisRef}></g>
        </g>
    );
}
