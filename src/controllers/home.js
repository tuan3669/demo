import connectDb from "../config/connectDb";

export async function getHomePage(req, res) {
  const db = await connectDb();
  const [users, fields] = await db.execute("SELECT * FROM `user`");
  console.log("users: ", users);
  res.render("home", { title: "Home", users });
}
export async function getDetailPage(req, res) {
  const db = await connectDb();
  const { id } = req.params;
  const [user, fields] = await db.execute(
    "SELECT * FROM `user` WHERE `id` = ? ",
    [id]
  );
  console.log("detail ", user[0]);
  res.render("detail", { title: "detail user", user: user[0] });
}
