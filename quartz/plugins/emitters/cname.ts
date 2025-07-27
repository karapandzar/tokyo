
import fs from "fs"
import path from "path"
import { QuartzEmitterPlugin } from "../types"

export const CNAME: QuartzEmitterPlugin = () => {
  return {
    name: "CNAME",
    emit: async ({ cfg, allFiles }) => {
      const baseUrl = cfg?.baseUrl
      if (!baseUrl) {
        console.warn("⚠️  CNAME emitter requires `baseUrl` to be set in your configuration.")
        return
      }

      const cname = baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
      fs.writeFileSync(path.join("public", "CNAME"), cname)
    },
  }
}

