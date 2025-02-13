import { Col } from "react-bootstrap"
import { CitySearch } from "@/features/city-search"
import { Header } from "./header"

export const HeaderWithSearch = () => {
  return (
    <Header>
      <Col>
        <CitySearch />
      </Col>
    </Header>
  )
}
