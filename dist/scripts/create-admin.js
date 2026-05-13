import { prisma } from "../lib/prisma.js";
import { hashPassword } from "../utils/admin-auth.js";
function readArg(name) {
    const prefix = `--${name}=`;
    const match = process.argv.find((value) => value.startsWith(prefix));
    return match ? match.slice(prefix.length) : undefined;
}
async function main() {
    const name = readArg("name");
    const email = readArg("email")?.toLowerCase();
    const password = readArg("password");
    const phone = readArg("phone");
    if (!name || !email || !password) {
        console.error('Usage: npm run admin:create -- --name="Admin" --email="admin@example.com" --password="strongpass" [--phone="9999999999"]');
        process.exit(1);
    }
    const existingAdmin = await prisma.adminUser.findUnique({
        where: { email },
    });
    if (existingAdmin) {
        console.error(`Admin with email ${email} already exists.`);
        process.exit(1);
    }
    const admin = await prisma.adminUser.create({
        data: {
            name,
            email,
            phone: phone ?? null,
            passwordHash: await hashPassword(password),
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true,
        },
    });
    console.log("Admin created successfully:");
    console.log(JSON.stringify(admin, null, 2));
}
try {
    await main();
}
catch (error) {
    console.error("Failed to create admin", error);
    process.exitCode = 1;
}
finally {
    await prisma.$disconnect();
}
//# sourceMappingURL=create-admin.js.map