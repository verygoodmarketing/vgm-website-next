"use client"

import { useTransition } from "@/hooks/use-transition"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function TransitionSettings() {
  const { transitionType, duration, setTransitionType, setDuration } = useTransition()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Transition Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Transition Type</label>
          <Select value={transitionType} onValueChange={(value) => setTransitionType(value as any)}>
            <SelectTrigger>
              <SelectValue placeholder="Select transition type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fade">Fade</SelectItem>
              <SelectItem value="slideUp">Slide Up</SelectItem>
              <SelectItem value="slideLeft">Slide Left</SelectItem>
              <SelectItem value="scale">Scale</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Duration: {duration.toFixed(1)}s</label>
          </div>
          <Slider value={[duration]} min={0.1} max={1} step={0.1} onValueChange={(value) => setDuration(value[0])} />
        </div>
      </CardContent>
    </Card>
  )
}

