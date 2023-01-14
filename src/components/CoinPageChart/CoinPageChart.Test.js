import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CoinPageChart from "./CoinPageChart";

const mockStore = configureStore();

describe("CoinPageChart component", () => {
  let store;
  let chartsData = {
    prices: [
      [1673136000000, 16950.861521853905],
      [1673222400000, 17074.61539572674],
      [1673308800000, 17194.90932945318],
      [1673395200000, 17436.90232978116],
      [1673481600000, 17996.832553741606],
      [1673568000000, 18866.810330617045],
      [1673654400000, 19941.780543296303],
      [1673736031000, 20923.45004107648],
    ],
    market_caps: [
      [1673136000000, 326371741274.41095],
      [1673222400000, 328470896861.37854],
      [1673308800000, 331158152699.25574],
      [1673395200000, 335743942932.3494],
      [1673481600000, 345688973386.69006],
      [1673568000000, 363381125082.7658],
      [1673654400000, 382675302196.4898],
      [1673736031000, 403101129569.35596],
    ],
    total_volumes: [
      [1673136000000, 9594456673.448975],
      [1673222400000, 11841041542.993702],
      [1673308800000, 25532751567.198166],
      [1673395200000, 21858206845.29233],
      [1673481600000, 25439279072.98185],
      [1673568000000, 48025109150.17737],
      [1673654400000, 39514419053.17687],
      [1673736031000, 50097934738.63365],
    ],
  }; // sample data for chartsData
  beforeEach(() => {
    store = mockStore({
      chartsData: {
        chartType: "price",
      },
      currency: {
        selectedCurrency: "USD",
      },
    });
  });

  it("should render the component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CoinPageChart chartsData={chartsData} />
      </Provider>
    );
    expect(getByText("Price")).toBeInTheDocument();
  });

  it("should change the chart type when the volume button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CoinPageChart chartsData={chartsData} />
      </Provider>
    );
    fireEvent.click(getByText("Volume"));
    expect(store.getActions()).toEqual([
      { type: "CHANGE_CHART_TYPE", payload: "volume" },
    ]);
  });

  it("should change the date range when the week button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <CoinPageChart chartsData={chartsData} />
      </Provider>
    );
    fireEvent.click(getByText("Week"));
    expect(store.getActions()).toEqual([
      { type: "CHANGE_DATE_RANGE", payload: 7 },
    ]);
  });
});
