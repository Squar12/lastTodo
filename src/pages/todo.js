
import { List } from "@/components/todolists/TodoLists"
import { DATA } from "@/utilities/data"

export default function Home () {
    return (
        <div>
            {DATA.map((props, )=> { 
                return<List tt={props}/>
            })}
        </div>
    )
}



