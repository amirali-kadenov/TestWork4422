import { Compass } from "lucide-react"
import { Card, CardBody } from "react-bootstrap"

type Props = {
  speed: number
  deg: number
}

export const WeatherWindInfo = ({ speed, deg }: Props) => {
  return (
    <Card className="bg-dark bg-opacity-50 border-secondary h-100">
      <CardBody>
        <h6 className="text-white-50">WIND</h6>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="text-white">{speed} m/s</h3>
            <small className="text-white-50">Wind speed</small>
            <div className="mt-2">
              <h3 className="text-white">{deg}°</h3>
              <small className="text-white-50">Wind direction</small>
            </div>
          </div>
          <Compass
            className="text-white"
            size={50}
            style={{ transform: `rotate(${deg}deg)` }}
          />
        </div>
      </CardBody>
    </Card>
  )
}
