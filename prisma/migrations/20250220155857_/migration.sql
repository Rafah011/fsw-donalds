/*
  Warnings:

  - The values [DELIVERY] on the enum `ConsumptionMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ConsumptionMethod_new" AS ENUM ('TAKEAWAY', 'IN_LOCAL');
ALTER TABLE "Order" ALTER COLUMN "consumptions" TYPE "ConsumptionMethod_new" USING ("consumptions"::text::"ConsumptionMethod_new");
ALTER TYPE "ConsumptionMethod" RENAME TO "ConsumptionMethod_old";
ALTER TYPE "ConsumptionMethod_new" RENAME TO "ConsumptionMethod";
DROP TYPE "ConsumptionMethod_old";
COMMIT;
