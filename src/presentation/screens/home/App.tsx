import React, { useState, useEffect } from "react";
import "./App.css";
import CardComponent from "../../components/card/Card";
import Header from "../../components/header/Header";
import { Event1 } from "../../../assets/images";
import { Event2 } from "../../../assets/images";
import { Event3 } from "../../../assets/images";

interface Props {
  title: any;
  content: any;
}

function HomeScreen() {
  return (
    <>
      <Header />
      <div className="App">
        <CardComponent
          date={"27/06/2023 - 16h"}
          event={"Lollapalooza"}
          local={"Zona Leste"}
          address={"Rua Consolação São Paulo"}
          complement={"Bairro próximo a zona leste em São Paulo"}
          number={"155"}
          city={"São Paulo"}
          state={"SP"}
          cellphone={"(35) 98894-1009"}
          img={Event1}
        />
        <CardComponent
          date={"27/06/2023 - 16h"}
          event={"TomorrowLand"}
          local={"Museu de Artes"}
          address={"Rua Consolação São Paulo"}
          complement={"Bairro próximo ao museu de artes"}
          number={"155"}
          city={"São Paulo"}
          state={"SP"}
          cellphone={"(35) 98894-1009"}
          img={Event2}
        />
        <CardComponent
          date={"27/06/2023 - 16h"}
          event={"October Fest"}
          local={"Parque Ibirapuera"}
          address={"Rua Consolação São Paulo"}
          complement={"Bairro próximo ao parque Ibirapuera"}
          number={"155"}
          city={"São Paulo"}
          state={"SP"}
          cellphone={"(35) 98894-1009"}
          img={Event3}
        />
      </div>
    </>
  );
}

export default HomeScreen;
