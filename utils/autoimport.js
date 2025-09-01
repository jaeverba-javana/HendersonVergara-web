import {readdir} from "node:fs/promises";
import {CONSOLE_COLORS} from "./constants.js";

export async function autoImportDefaultsFromDir (dirPath) {
    const routes = {}

    const directoryFiles = await readdir(dirPath)

    for (const file of directoryFiles) {
        // console.log(`[...] Trying to import${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
        // logger.writeLn(`Trying to import [...] ${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
        try {
            routes[file] = (await import(`.${dirPath}/${file}`)).default;
            // logger.replaceLastLine(`Trying to import [${CONSOLE_COLORS.fg_green}OK${CONSOLE_COLORS.reset}] ${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
            console.log(`Trying to import [${CONSOLE_COLORS.fg_green}OK${CONSOLE_COLORS.reset}] ${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
        } catch (e) {
            // logger.replaceLastLine(`Trying to import [${CONSOLE_COLORS.fg_red}Error${CONSOLE_COLORS.reset}] ${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
            console.log(`Trying to import [${CONSOLE_COLORS.fg_red}Error${CONSOLE_COLORS.reset}] ${CONSOLE_COLORS.fg_cyan} ${dirPath}/${file}${CONSOLE_COLORS.reset}`)
            // console.error(`   ${e.message}`)
            console.error(`   `, e)
        }
    }

    console.log('')

    return routes
}