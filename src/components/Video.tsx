import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=oPOKpSFqy-I&t=1040s&pp=ygUKcm9ja2V0c2VhdA%3D%3D"
      />
    </div>
  )
}
