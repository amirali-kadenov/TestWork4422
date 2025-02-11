import { Card, CardBody } from "react-bootstrap"

type Props = {
  uvIndex: number
}

export const WeatherUVIndex = ({ uvIndex }: Props) => {
  return (
    <Card className="bg-dark bg-opacity-50 border-secondary h-100">
      <CardBody>
        <h6 className="text-white-50">UV INDEX</h6>
        <h3 className="text-white">{uvIndex}</h3>
        <span className="text-white-50">{getUVIndexDescription(uvIndex)}</span>
        <div className="progress mt-2 bg-secondary" style={{ height: "4px" }}>
          <div
            className="progress-bar bg-info"
            style={{ width: `${(uvIndex / 11) * 100}%` }}
          ></div>
        </div>
        <small className="text-white-50 d-block mt-2">
          Use sun protection until 16:00
        </small>
      </CardBody>
    </Card>
  )
}

export const getUVIndexDescription = (uvIndex: number): string => {
  if (uvIndex <= 2) return "Low"
  if (uvIndex <= 5) return "Moderate"
  if (uvIndex <= 7) return "High"
  if (uvIndex <= 10) return "Very High"
  return "Extreme"
}
