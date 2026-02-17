import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"
import type { Event } from "@/lib/mock-data"

export function EventCard({ event }: { event: Event }) {
  const soldPercentage = Math.round((event.sold / event.supply) * 100)
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Link href={`/marketplace/${event.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute left-3 top-3">
            <Badge variant="secondary" className="bg-background/80 text-foreground backdrop-blur-sm">
              {event.category}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
              {event.price} ETH
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-foreground line-clamp-1 text-balance">
            {event.title}
          </h3>
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>{event.sold} / {event.supply} sold</span>
              <span>{soldPercentage}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${soldPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
