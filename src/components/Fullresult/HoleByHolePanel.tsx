import Image from 'next/image';

const HoleByHolePanel = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
                    <Image
                        src="/path/to/player-image.jpg"
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Chris WILLIAMS (RSA)</h2>
                </div>
                <div className="ml-auto flex items-center space-x-8">
                    <div>
                        <div className="text-sm">2021 Ranking</div>
                        <div className="text-2xl font-bold">21</div>
                    </div>
                    <div>
                        <div className="text-sm">2021 Points</div>
                        <div className="text-2xl font-bold">504.3</div>
                    </div>
                    <button className="text-blue-400 hover:underline">VIEW PROFILE</button>
                </div>
            </div>
            <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-center border-collapse">
                    <thead>
                    <tr>
                        <th className="bg-purple-600 p-2">HOLE</th>
                        {[...Array(18)].map((_, i) => (
                            <th key={i} className="bg-gray-900 p-2">{i + 1}</th>
                        ))}
                        <th className="bg-purple-600 p-2">OUT</th>
                        <th className="bg-gray-900 p-2">IN</th>
                        <th className="bg-gray-900 p-2">TOTAL</th>
                        <th className="bg-gray-900 p-2">TO PAR</th>
                    </tr>
                    <tr>
                        <th className="bg-purple-600 p-2">PAR</th>
                        {[...Array(18)].map((_, i) => (
                            <th key={i} className="bg-gray-900 p-2">4</th>
                        ))}
                        <th className="bg-purple-600 p-2">36</th>
                        <th className="bg-gray-900 p-2">36</th>
                        <th className="bg-gray-900 p-2">72</th>
                        <th className="bg-gray-900 p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {['R1', 'R2', 'R3'].map((round, i) => (
                        <tr key={i} className="bg-gray-700">
                            <td className="p-2">{round}</td>
                            {[4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3].map((score, j) => (
                                <td key={j} className="p-2">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-purple-600 p-2">34</td>
                            <td className="bg-purple-600 p-2">35</td>
                            <td className="p-2">69</td>
                            <td className="p-2 bg-red-600">-3</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-sm flex justify-center space-x-4">
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                    Eagle or better
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                    Birdie
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-black rounded-full mr-2"></span>
                    Bogey
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                    Double Bogey +
                </div>
            </div>
        </div>
    );
};

export default HoleByHolePanel;
