import { Card, CardBody } from "react-bootstrap"

type Props = {
  title: string
  value: string | number
  description?: string
}

export const WeatherCard = ({ title, value, description }: Props) => {
  return (
    <Card className="bg-dark bg-opacity-50 border-secondary h-100">
      <CardBody>
        <h6 className="text-white-50">{title}</h6>
        <h3 className="text-light">{value}</h3>
        {description && <small className="text-white-50">{description}</small>}
      </CardBody>
    </Card>
  )
}
