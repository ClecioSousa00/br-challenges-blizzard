import { SVGProps } from 'react'

export const SvgAllGames = ({ fill }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <rect y="0.5" width="3" height="3" fill={fill} />
      <rect y="6.5" width="3" height="3" fill={fill} />
      <rect x="6" y="0.5" width="3" height="3" fill={fill} />
      <rect x="6" y="6.5" width="3" height="3" fill={fill} />
    </svg>
  )
}
