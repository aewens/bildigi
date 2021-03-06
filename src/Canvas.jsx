import React, { useState, useRef, useEffect } from "react";


const Canvas = () => {
    const [points, setPoints] = useState([]);
    const [active, setActive] = useState(false);

    const canvasRef = useRef(null);

    const drawPoint = (ctx, point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#d33682";
        ctx.fill();
        ctx.closePath();
    }

    const resizeCanvas = (elem) => {
        const container = elem.parentNode;
        console.log(container, container.offsetWidth, container.offsetHeight);
        if (container.offsetWidth > container.offsetHeight) {
            const width = container.offsetHeight * 4 / 3;
            const height = container.offsetHeight;
            elem.style.width = `${width}px`;
            elem.style.height = `${height}px`;
            elem.width = elem.offsetWidth;
            elem.height = elem.offsetHeight;
        } else {
            const width = container.offsetWidth;
            const height = container.offsetWidth * 3 / 4;
            elem.style.width = `${width}px`;
            elem.style.height = `${height}px`;
            elem.width = elem.offsetWidth;
            elem.height = elem.offsetHeight;
        }
    }

    const clearCanvas = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    const clickCanvas = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPoints([...points, {x: x, y: y}]);
    }

    const activateCanvas = (e) => {
        setActive(true);
    }

    const deactivateCanvas = (e) => {
        setActive(false);
    }

    const paintCanvas = (e) => {
        if (active) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setPoints([...points, {x: x, y: y}]);
        }
    }

    const clearPoints = (e) => {
        setPoints([]);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        resizeCanvas(canvas);
        clearCanvas(context);
        points.forEach(point => drawPoint(context, point));
    });

    return (
        <div className="Canvas">
            <canvas
                className="bildigi"
                ref={canvasRef}
                onDoubleClick={clearPoints}
                onMouseMove={paintCanvas}
                onMouseDown={activateCanvas}
                onMouseUp={deactivateCanvas} />
        </div>
    );
}

export default Canvas;
