import {useQuery} from '@tanstack/react-query'

function LeaderBoard() {

    const { data, isPending, error } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:7116/api/GetUsers').then((res) =>
            res.json(),),
        })

    if(isPending) return 'Loading...'

    if(error) return 'An error has occurred:' + error.message

    console.log(data)

    return (
        <div className='absolute text-center bg-top-band w-80 h-dvh top-4.5rem'>
            <h2 className='pt-9 text-3xl text-center justify-center font-bold flexbox pb-5'>Leaderboard</h2>
            <table className='flexbox border-collapse w-72 justify-center text-center mx-auto'>
                <thead>
                <tr className='border-2'>
                    <th className=''>Rank</th>
                    <th>Username</th>
                    <th>Presents</th>
                </tr>
                {data.map((user:any, i: number) => (
                    <tr className='border-2' key={i+1}>
                        <td>{i+1}</td>
                        <td className='flexbox'>{user.Username}</td>
                        <td className='flexbox'>{user.Presents}</td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
    )
}

export default LeaderBoard;