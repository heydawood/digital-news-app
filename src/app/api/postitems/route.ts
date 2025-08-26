import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";


dbConnect()

export async function GET() {
    const postItems = await PostItem.find().select('-__v')
    return Response.json(postItems)
}

export async function POST(request: Request  ) {
    const postItem = await request.json()
    try {
        const savedItems = await new PostItem({...postItem}).save();
        return new Response(JSON.stringify(savedItems   ), {
            headers:{
                'Content-Type': 'application/json'
            },
            status: 201,
        }) 
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error' }), { status: 500 })
    }
}