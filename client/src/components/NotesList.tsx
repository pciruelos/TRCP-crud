
import {trpc} from '../trpc'


function NotesList() {
    const notes = trpc.note.get.useQuery();
  return (
    <div>{JSON.stringify(notes)}</div>
  )
}

export default NotesList