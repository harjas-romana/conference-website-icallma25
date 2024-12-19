import { Speakers } from '../components/Speakers'

export const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Speakers</h1>
      <p className="mb-4">Details about the speakers will go here.</p>
      <Speakers />
    </div>
  )
}
