'use server'
import { createClient } from "../utils/supabase/supabaseServer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// sign up user
export async function registerUser(formData: FormData) {
    const supabase = await createClient()
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    const {error} = await supabase.auth.signUp(data);

    if (error) {
        redirect('/error');
    }
    revalidatePath('/', 'layout')
    redirect('/')
}

// sign in user
export async function loginUser(formData: FormData) {
    const supabase = await createClient()
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const {error} = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect('/error');
    }
    revalidatePath('/', 'layout')
    redirect('/')
}