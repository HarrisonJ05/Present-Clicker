import {useQuery} from '@tanstack/react-query'

function LeaderBoard() {


    const { data, isPending, error } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:7116/api/GetUsers', {mode: 'no-cors'}).then((res) =>
            res.json(),),
        })

    if(isPending) return 'Loading...'

    if(error) return 'An error has occurred:' + error.message

    return (
        <div className='absolute bg-top-band w-80 h-dvh top-4.5rem left-0'>
            <h2 className='pt-9 text-3xl text-center justify-center font-bold flexbox'>Leaderboard</h2>
            <ul>
                {data.map((user:any) => (
                    <li>
                        <p className='absolute flexbox'>{user.username}</p>
                        <p className='absolute flexbox'>{user.presents}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeaderBoard;