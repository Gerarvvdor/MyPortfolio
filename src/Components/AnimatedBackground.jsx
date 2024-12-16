import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const TWO_PI = Math.PI * 2;

        class Circle {
            constructor(x, y, baseRadius, bounceRadius, angleCircle) {
                this.basePosition = { x, y };
                this.position = { x, y };
                this.speed = 0.005;
                this.baseSize = 10;
                this.size = 10;
                this.angle = x + y;
                this.baseRadius = baseRadius;
                this.bounceRadius = bounceRadius;
                this.angleCircle = angleCircle;
            }

            update() {
                this.position.x =
                    this.basePosition.x +
                    Math.cos(this.angleCircle) *
                    (Math.sin(this.angle + this.angleCircle) * this.bounceRadius +
                        this.baseRadius);
                this.position.y =
                    this.basePosition.y +
                    Math.sin(this.angleCircle) *
                    (Math.sin(this.angle + this.angleCircle) * this.bounceRadius +
                        this.baseRadius);
                this.size = Math.cos(this.angle) * 8 + this.baseSize;
                this.angle += this.speed;
            }

            render(context) {
                context.fillStyle = `hsl(195, 100%, ${this.size * 4}%)`;
                context.beginPath();
                context.arc(this.position.x, this.position.y, this.size, 0, TWO_PI);
                context.fill();
            }
        }

        class CircleContainer {
            constructor(context, x, y) {
                this.context = context;
                this.position = { x, y };
                this.numberOfCircles = 19;
                this.circles = [];
                this.baseRadius = 20;
                this.bounceRadius = 150;
                this.singleSlice = TWO_PI / this.numberOfCircles;
            }

            initializeCircles() {
                for (let i = 0; i < this.numberOfCircles; i++) {
                    this.circles.push(
                        new Circle(
                            this.position.x,
                            this.position.y + Math.random(),
                            this.baseRadius,
                            this.bounceRadius,
                            i * this.singleSlice
                        )
                    );
                }
            }

            update() {
                this.circles.forEach((circle) => circle.update());
            }

            render() {
                this.circles.forEach((circle) => circle.render(this.context));
            }
        }

        class Application {
            constructor(canvas) {
                this.canvas = canvas;
                this.context = this.canvas.getContext("2d");
                this.width = (this.canvas.width = window.innerWidth);
                this.height = (this.canvas.height = window.innerHeight);
                this.circleContainers = [];
                window.addEventListener("resize", this.resizeCanvas.bind(this));
            }

            resizeCanvas() {
                this.width = this.canvas.width = window.innerWidth;
                this.height = this.canvas.height = window.innerHeight;
                this.circleContainers = [];
                this.initializeCircleContainers();
            }

            initializeCircleContainers() {
                for (let x = 0; x < this.width + 100; x += 100) {
                    for (let y = 0; y < this.height + 100; y += 100) {
                        const circleContainer = new CircleContainer(this.context, x, y);
                        circleContainer.initializeCircles();
                        this.circleContainers.push(circleContainer);
                    }
                }
            }

            update() {
                this.circleContainers.forEach((container) => container.update());
            }

            render() {
                this.context.clearRect(0, 0, this.width, this.height);
                this.circleContainers.forEach((container) => container.render());
            }

            loop() {
                this.update();
                this.render();
                requestAnimationFrame(this.loop.bind(this));
            }
        }

        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.initializeCircleContainers();
        app.loop();

        return () => {
            window.removeEventListener("resize", app.resizeCanvas.bind(app));
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1, // Asegura que el canvas esté detrás del contenido
                    filter: "url('#shadowed-goo')",
                    opacity: 0.3
                }}
            >
                Your browser doesn't support canvas
            </canvas>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix
                            in="shadow"
                            mode="matrix"
                            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                            result="shadow"
                        />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feBlend in2="shadow" in="goo" result="goo" />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default AnimatedBackground;
