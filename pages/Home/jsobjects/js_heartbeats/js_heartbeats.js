export default {
  heartbeatOK: async () => {
    await fetch("https://uptime.betterstack.com/api/v1/heartbeat/parQJgoUKt4WQucEpVNNTTiB");
  },
	
  heartbeatFail: async () => {
		try {
    const res = await fetch("https://uptime.betterstack.com/api/v1/heartbeat/parQJgoUKt4WQucEpVNNTTiB/fail");
  	console.log("Fail heartbeat status:", res.status);
    }catch(error){
      console.log("Fail heartbeat error:", error);
		}
		},
	
  heartbeatExitCode: async (code) => {
    await fetch(`https://uptime.betterstack.com/api/v1/heartbeat/parQJgoUKt4WQucEpVNNTTiB/${code}`);
  }
}
