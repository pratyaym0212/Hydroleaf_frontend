// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// async function main() {
//   const adminEmail = "admin@hydroleaf.com";
//   const adminPassword = "Admin@123"; // Change this in production
//   const hashedPassword = await bcrypt.hash(adminPassword, 10);

//   const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

//   if (!existingAdmin) {
//     await prisma.user.create({
//       data: {
//         email: adminEmail,
//         password: hashedPassword,
//         role: "admin",
//       },
//     });
//     console.log("✅ Default admin user created.");
//   } else {
//     console.log("⚠️ Admin user already exists.");
//   }
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(() => prisma.$disconnect());
