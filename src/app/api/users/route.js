import {NextResponse} from "next/server";

export function GET(response) {
    const users = [
        {
            name: "gaurav",
            phone: "123",
            course: "java"
        },
        {
            name: "ram",
            phone: "2342",
            course: "python"
        },
        {
            name: "james",
            phone: "232411",
            course: "rust"
        }

        ];
    return NextResponse.json(users);

}


export async function POST(request) {
    // const body = request.body;
    // console.log(body);
    // console.log(request.pathname);

   // const jsonData= await request.json();

   const textData = await request.text();

   console.log(textData);

    // console.log(jsonData);
    return NextResponse.json({
        message: "post api call",
    })

}

export function DELETE(request) {
    console.log("delete api call");
    return NextResponse.json({
        message: "delete api call",
        status: true
    }, {
        status: 200,
        statusText: "OK"
        }
    );

}

export function PUT() {

}
