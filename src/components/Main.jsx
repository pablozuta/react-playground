
function Main() {
    let quotes = [{
        id: 1,
        quote: "If we wish to talk about Pascal's method, we have to mention both heart and reason.",
        page: 166
    },
    {
        id: 2,
        quote: "I shall cease to wish evil to another.",
        page: 244,
    },
    ];

    return (
        <div>
        {quotes.map((item) =>
            <p key={item.id}>{item.quote} Pagina:{item.page}</p>

        )}
        </div>
    )
}

export default Main