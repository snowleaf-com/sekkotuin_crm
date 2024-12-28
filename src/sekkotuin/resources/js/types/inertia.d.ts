declare namespace App {
  interface PageProps {
    auth: {
      user: {
        id: number;
        name: string;
        email: string;
        // 必要に応じてユーザーの他のプロパティを追加
      } | null;
    };
  }
}