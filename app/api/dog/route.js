export async function GET() {
    return new Response(JSON.stringify({
      message: "저는 웃픈ㅠ 강아지입니다.",
      image: "https://i.pinimg.com/564x/97/9a/4f/979a4f45799cd1f20da97048c27b6339.jpg"
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }