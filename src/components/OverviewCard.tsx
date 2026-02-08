import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type Stat = {
  label: string
  value: string
}

type OverviewCardProps = {
  title: string
  icon: LucideIcon
  linkText?: string
  stats: Stat[]
}

const  OverviewCard =({
  title,
  icon: Icon,
  linkText = "View all",
  stats,
}: OverviewCardProps)=> {
  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between  p-2 sm:p-3">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <CardTitle className="text-sm font-semibold">
            {title}
          </CardTitle>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          {linkText} →
        </button>
      </CardHeader>

      <CardContent className="grid grid-cols-3 gap-4  p-2 sm:p-3">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-xs  text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-base sm:text-xl font-semibold">
              {item.value}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
export default OverviewCard
