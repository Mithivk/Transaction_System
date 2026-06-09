 <form class="mt-6" (ngSubmit)="formSubmit()">
      <!-- Email   -->
      <input
        type="email"
        placeholder="E-mail"
        class="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-[#cff0ff_0px_10px_10px_-5px] placeholder-gray-400 focus:outline-none focus:border-2 focus:border-[#12b1d1] transition"
        [(ngModel)]="loginData.email"
        name="email"
        
        required
      />

      <!-- Password   with toggle -->
      <div class="relative w-full">
        <input
          [type]="showPassword ? 'text' : 'password'"
          placeholder="Password"
          class="w-full bg-white border-none p-4 rounded-2xl mt-4 shadow-[#cff0ff_0px_10px_10px_-5px] placeholder-gray-400 pr-12 focus:outline-none focus:border-2 focus:border-[#12b1d1] transition"
          [(ngModel)]="loginData.password"
          name="password"
          required
        />
        <button
          type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          (click)="showPassword = !showPassword"
        >
          <!-- Eye icons (unchanged) -->
          <svg
            *ngIf="!showPassword"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
            *ngIf="showPassword"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59"
            />
          </svg>
        </button>
      </div>

      <!-- Buttons row -->
      <div class="flex gap-4 mt-6">
        <button
          type="submit"
          class="flex-1 font-bold bg-gradient-to-r from-[#1089d3] to-[#12b1d1] text-white py-4 rounded-2xl shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] border-none transition-all duration-200 hover:scale-105 hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px]"
        >
          Sign In
        </button>
        <button
          type="button"
          (click)="clearForm()"
          class="flex-1 font-bold bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 rounded-2xl shadow-[rgba(133,189,215,0.88)_0px_20px_10px_-15px] border-none transition-all duration-200 hover:scale-105 hover:shadow-[rgba(133,189,215,0.88)_0px_23px_10px_-20px] active:scale-95 active:shadow-[rgba(133,189,215,0.88)_0px_15px_10px_-10px]"
        >
          Clear
        </button>
      </div>
    </form>
