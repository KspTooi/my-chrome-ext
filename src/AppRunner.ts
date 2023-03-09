

import Store from "@/scripts/Store"
import ModulesA from "@/scripts/ModulesA"
import ModulesB from "@/scripts/ModulesB"



Store.set("New Store Name!")

console.log(Store.get())

ModulesA.printStoreName()
ModulesB.printStoreName()







