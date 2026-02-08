import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"

const days = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getStartDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

type Props = {
  onClose: () => void
  onBack?: () => void
}

export default function CalendarModal({ onClose, onBack }: Props) {
  const today = new Date()
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )
  const [selectedDate, setSelectedDate] = useState<Date | null>(today)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const startDay = getStartDayOfMonth(year, month)

  const calendarDays = useMemo(() => {
    const totalCells = 42
    return Array.from({ length: totalCells }, (_, i) => {
      const dayNumber = i - startDay + 1
      if (dayNumber < 1 || dayNumber > daysInMonth) return null
      return new Date(year, month, dayNumber)
    })
  }, [year, month, daysInMonth, startDay])

  function prevMonth() {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  function changeYear(newYear: number) {
    setCurrentDate(new Date(newYear, month, 1))
  }

  function isSameDay(a?: Date | null, b?: Date | null) {
    if (!a || !b) return false
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    )
  }

  return (
  <div className="fixed inset-0 z-50">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/80"
      onClick={onClose}
    />

    {/* Modal wrapper */}
    <div className="relative z-10 flex min-h-full items-center justify-center p-4">
      <div
        className="w-[90%] max-w-md md:mt-10 rounded-xl bg-neutral-900 text-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => onBack?.()}
            className="flex items-center gap-2 text-lg font-semibold hover:opacity-80"
          >
            <ArrowLeft className="h-5 w-5" />
            Calendar
          </Button>

          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Month + Year */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
          <Button variant="ghost" size="icon" onClick={prevMonth}>
            <ChevronLeft />
          </Button>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">
              {currentDate.toLocaleString("default", { month: "long" })}
            </h2>

            <select
              value={year}
              onChange={(e) => changeYear(Number(e.target.value))}
              className="rounded-md bg-neutral-800 px-2 py-1 text-sm outline-none"
            >
              {Array.from({ length: 80 }).map((_, i) => {
                const y = 2000 + i
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                )
              })}
            </select>
          </div>

          <Button variant="ghost" size="icon" onClick={nextMonth}>
            <ChevronRight />
          </Button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-px bg-neutral-800 text-center text-xs">
          {days.map((day) => (
            <div key={day} className="bg-neutral-900 py-2 text-neutral-400">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-px bg-neutral-800">
          {calendarDays.map((date, i) => {
            const isToday = isSameDay(date, today)
            const isSelected = isSameDay(date, selectedDate)

            return (
              <button
                key={i}
                disabled={!date}
                onClick={() => date && setSelectedDate(date)}
                className={cn(
                  "relative flex h-16 items-start justify-start bg-neutral-900 p-2 text-sm text-neutral-400 hover:bg-neutral-800",
                  !date && "cursor-default opacity-30",
                  isToday && "border border-blue-500",
                  isSelected &&
                    "bg-blue-600 text-white hover:bg-blue-600"
                )}
              >
                {date?.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

}


