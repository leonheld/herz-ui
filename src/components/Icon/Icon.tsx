/** @jsxRuntime classic /
/** @jsx jsx */
import { HerzUITheme, jsx } from "theme-ui"
import * as TablerIcons from "@tabler/icons"

type IconType = typeof import("@tabler/icons")

export interface IconProps {
  name: keyof IconType

  // set custom `width` and `height`
  size?: number

  // set `stroke` color
  color?: "primary" | "secondary" | "success" | "text"

  // set the thickness stroke
  stroke?: number
}

const Icon = ({
  name = "IconAlertTriangle",
  size = 20,
  color = "primary",
  stroke = 2,
}: IconProps) => {
  const Component = TablerIcons[name]

  return (
    <Component
      size={size}
      stroke={stroke}
      sx={{
        color: (theme: HerzUITheme) => theme.colors[color][0],
      }}
    />
  )
}

export default Icon
