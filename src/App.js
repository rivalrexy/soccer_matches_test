import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

const api = axios.create({
  baseURL: `https://client.elevenscore.com/api/football/database/player_list/`,
});
let tokenStr = "24578cdb-fc01-4794-9bb0-865dd8ac405c";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + mm + dd;

let lst = [];

function App() {
  // axios
  //   .get("https://client.elevenscore.com/api/football/database/player_list", {
  //     headers: { Authorization: "24578cdb-fc01-4794-9bb0-865dd8ac405c" },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  //console.log(today);

  //for (let i = 0; i < 11; i++) {
  axios
    .get(
      `https://client.elevenscore.com/api/football/match/matchfixtures?date=${today}&utc=%2B7`,
      {
        headers: {
          "x-api-key": `${tokenStr}`,
        },
      }
    )
    .then((res) => {
      //lst.push(res.data.result[i]);
      console.log(res.data.result[0]);
    })
    .catch((error) => {
      console.error(error);
    });
  //}
  // for (let i = 0; i < lst.length; i++) {
  //   console.log(lst[i]);
  // }
  //console.log(lst.length);
  return (
    <div className="App">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Today's matches
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample">
            <div class="card-body">
              <table className="center">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                    <td>
                      <h1 className="header_style">0 VS 0</h1>
                    </td>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>MU</td>
                    <td></td>
                    <td>CHELSEA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Upcoming matches
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample">
            <div class="card-body">
              <table className="center">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                    <td>
                      <h1 className="header_style">0 VS 0</h1>
                    </td>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>MU</td>
                    <td></td>
                    <td>CHELSEA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Finished matches
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample">
            <div class="card-body">
              <table className="center">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                    <td>
                      <h1 className="header_style">0 VS 0</h1>
                    </td>
                    <td>
                      <img
                        src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                        alt="Logo"
                        className="Logosize"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>MU</td>
                    <td></td>
                    <td>CHELSEA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <ul className="Match">
          <div>
            <li className="MatchList">
              <img
                src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                alt="Logo"
                className="Logosize"
              />
              MU VS CHELSEA
              <img
                src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                alt="Logo"
                className="Logosize"
              />
            </li>
          </div>
          <div>
            <li className="MatchList">
              <img
                src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                alt=""
                className="Logosize"
              />
              MC VS LIVERPOOL
              <img
                src="https://cdn.elevenscore.com/football/team/c527b869ef28a1587283d52aef16f018.png"
                alt="Logo"
                className="Logosize"
              />
            </li>
          </div>
        </ul> */}
      {/* </div> */}
    </div>
  );
}

export default App;
