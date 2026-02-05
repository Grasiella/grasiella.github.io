import { useEffect, useState } from "react"

const TARGET_DATE = new Date("2026-02-23T14:55:00+01:00")

function getTimeLeft() {
    const now = new Date().getTime()
    const diff = TARGET_DATE.getTime() - now

    if (diff <= 0) {
        return null
    }

    return {
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / (1000 * 60)) % 60),
        segundos: Math.floor((diff / 1000) % 60),
    }
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeLeft(getTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!timeLeft) {
        return (
        <div className="text-3xl font-bold text-pink-500 animate-pulse">
            🚨 O DISCO VOADOR CHEGOU EM FRANKFURT 🚨
        </div>
        )
    }

    return (
        <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
            ✈️ Contagem regressiva para pisar na Alemanha
        </h1>

        <div className="flex justify-center gap-4 text-2xl font-mono">
            <div>{timeLeft.dias}d</div>
            <div>{timeLeft.horas}h</div>
            <div>{timeLeft.minutos}m</div>
            <div>{timeLeft.segundos}s</div>
        </div>
        </div>
    )
}

