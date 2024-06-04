"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Component() {
  const [state, setState] = useState(["car wash 1", "car wash 2"]);
  const [date, setDate] = useState("");

  const handleDate = (date) => {
    console.log(date);
    setDate(date);
  };
  return (
    <div>
      about client
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDate}
        className="rounded-md border"
      />
    </div>
  );
}
