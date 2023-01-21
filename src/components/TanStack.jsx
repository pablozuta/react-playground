import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

const POSTS = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
]

function TanStack() {
    console.log(POSTS);
    const postsQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => wait(3000).then(() => [...POSTS])
        /* Promise.reject("Error Message"), */
    })

    const newPostMutation = useMutation({
        mutationFn: title => {
            return wait(1500).then(() =>
                POSTS.push({ id: crypto.randomUUID(), title })
            )
        },
    })

    if (postsQuery.isLoading) {
        return <h2>Loading...</h2>
    }

    if (postsQuery.isError) {
        return <pre>{JSON.stringify(postsQuery.error)}</pre>
    }



    return (
        <div>
            {postsQuery.data.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            <button
                onClick={() => newPostMutation.mutate("Post Number 3")}
                >
                Add New
            </button>
        </div>
    )
}

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

export default TanStack;