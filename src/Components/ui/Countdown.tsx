import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();
  const timeLeft: TimeLeft = {
    days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
  };
  return timeLeft;
};

export default function Countdown() {
  const targetDate = new Date("2025-06-01T00:00:00"); // Ubah tanggal sesuai kebutuhan
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000 * 60); // Update setiap menit

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 mt-6">
      <TimeCard label="Hari" value={timeLeft.days} />
      <TimeCard label="Jam" value={timeLeft.hours} />
      <TimeCard label="Menit" value={timeLeft.minutes} />
    </div>
  );
}

interface TimeCardProps {
  label: string;
  value: number;
}

function TimeCard({ label, value }: TimeCardProps) {
  return (
    <div className="bg-white text-black rounded-xl p-4 w-24 text-center shadow-lg">
      <p className="text-3xl font-bold">{value.toString().padStart(2, "0")}</p>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
