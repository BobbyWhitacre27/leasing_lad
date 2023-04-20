export const APIURL = `http://localhost:4000/api`;

export async function getAllResident_Cards() {

    try {
        const res = await fetch(`${APIURL}/resident_card`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function createResident_Card(
    name,
    apartment,
    move_in_date,
    rent,
    lease_term,
    sent_approval_docs,
    sent_lease,
    received_electric,
    received_insurance,
    received_signed_lease,
    received_payment,
    notes,
    moved_in,
    user_id
) {
    try {

        const res = await fetch(`${APIURL}/resident_card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                apartment: apartment,
                move_in_date: move_in_date,
                rent: rent,
                lease_term: lease_term,
                sent_approval_docs: sent_approval_docs,
                sent_lease: sent_lease,
                received_electric: received_electric,
                received_insurance: received_insurance,
                received_signed_lease: received_signed_lease,
                received_payment: received_payment,
                notes: notes,
                moved_in: moved_in,
                user_id: user_id
            }),
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function deleteResident_Card(id) {

    try {
        const res = await fetch(`${APIURL}/resident_card/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function editResidentCard(
    id,
    name,
    apartment,
    move_in_date,
    rent,
    lease_term,
    sent_approval_docs,
    sent_lease,
    received_electric,
    received_insurance,
    received_signed_lease,
    received_payment,
    notes,
    moved_in,
    user_id
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                apartment: apartment,
                move_in_date: move_in_date,
                rent: rent,
                lease_term: lease_term,
                sent_approval_docs: sent_approval_docs,
                sent_lease: sent_lease,
                received_electric: received_electric,
                received_insurance: received_insurance,
                received_signed_lease: received_signed_lease,
                received_payment: received_payment,
                notes: notes,
                moved_in: moved_in,
                user_id: user_id
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

export const register = async (username, password) => {

    const res = await fetch(`${APIURL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
        }),
    });
    const json = await res.json();

    return json;
};

export const login = async (username, password) => {
    const res = await fetch(`${APIURL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
        }),
    });
    const json = await res.json();
    return json;
};

