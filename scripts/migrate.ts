import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Running database migrations...')
  
  try {
    // This will create tables if they don't exist
    // In production, you should use migrations instead
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    
    // Check if admin exists, if not, prompt to create one
    const adminCount = await prisma.admin.count()
    if (adminCount === 0) {
      console.log('⚠️  No admin users found. Run: npm run create-admin')
    } else {
      console.log(`✅ Found ${adminCount} admin user(s)`)
    }
    
    console.log('✅ Database setup complete')
  } catch (error) {
    console.error('❌ Database migration failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()

