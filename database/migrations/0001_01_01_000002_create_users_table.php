<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('employee_id')->nullable();
            $table->string('user_name');
            $table->string('phone')->unique()->nullable();
            $table->string('email')->unique();
            $table->text('address')->nullable();
            $table->text('about')->nullable();
            $table->foreignId('report_to')->nullable()->constrained('users')->nullOnDelete();
            $table->string('password');
            $table->foreignId('designation')->nullable()->constrained('designations')->nullOnDelete();
            $table->string('nid')->nullable();
            $table->string('name');
            $table->string('profile_image')->nullable();
            $table->foreignId('department')->nullable()->constrained('departments')->nullOnDelete();
            $table->date('date_of_joining')->nullable();
            $table->date('birthday')->nullable();
            $table->string('gender')->nullable();
            $table->string('passport_no')->nullable();
            $table->date('passport_exp_date')->nullable();
            $table->string('nationality')->nullable();
            $table->string('religion')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('employment_of_spouse')->nullable();
            $table->integer('number_of_children')->nullable();
            $table->string('emergency_contact_primary_name')->nullable();
            $table->string('emergency_contact_primary_relationship')->nullable();
            $table->string('emergency_contact_primary_phone')->nullable();
            $table->string('emergency_contact_secondary_name')->nullable();
            $table->string('emergency_contact_secondary_relationship')->nullable();
            $table->string('emergency_contact_secondary_phone')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bank_account_no')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('pan_no')->nullable();
            $table->string('family_member_name')->nullable();
            $table->string('family_member_relationship')->nullable();
            $table->date('family_member_dob')->nullable();
            $table->string('family_member_phone')->nullable();
            $table->string('education_ug_institution')->nullable();
            $table->string('education_ug_degree')->nullable();
            $table->year('education_ug_start_year')->nullable();
            $table->year('education_ug_end_year')->nullable();
            $table->string('education_pg_institution')->nullable();
            $table->string('education_pg_degree')->nullable();
            $table->year('education_pg_start_year')->nullable();
            $table->year('education_pg_end_year')->nullable();
            $table->string('experience_1_company')->nullable();
            $table->string('experience_1_position')->nullable();
            $table->date('experience_1_start_date')->nullable();
            $table->date('experience_1_end_date')->nullable();
            $table->string('experience_2_company')->nullable();
            $table->string('experience_2_position')->nullable();
            $table->date('experience_2_start_date')->nullable();
            $table->date('experience_2_end_date')->nullable();
            $table->string('experience_3_company')->nullable();
            $table->string('experience_3_position')->nullable();
            $table->date('experience_3_start_date')->nullable();
            $table->date('experience_3_end_date')->nullable();
            $table->string('salary_basis')->nullable();
            $table->decimal('salary_amount', 10, 2)->nullable();
            $table->string('payment_type')->nullable();
            $table->boolean('pf_contribution')->nullable();
            $table->string('pf_no')->nullable();
            $table->string('employee_pf_rate')->nullable();
            $table->string('additional_pf_rate')->nullable();
            $table->string('total_pf_rate')->nullable();
            $table->boolean('esi_contribution')->nullable();
            $table->string('esi_no')->nullable();
            $table->string('employee_esi_rate')->nullable();
            $table->string('additional_esi_rate')->nullable();
            $table->string('total_esi_rate')->nullable();
            $table->timestamp('email_verified_at')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
