// import Espn from "./src/clients/espn";
import Sleeper from "./clients/sleeper";
// import Yahoo from "./src/clients/yahoo";

const client = new Sleeper("917989470535254016");

async function getData () {
  return await client.getLeague();
}

getData().then(response => console.log(response))

export { Sleeper }