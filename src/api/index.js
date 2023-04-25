const APIURL = `http://localhost:4000/api`;

async function getAllResident_Cards() {

    try {
        const res = await fetch(`${APIURL}/resident_card`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

async function getResidentCardsByUserId(id) {

    try {
        const res = await fetch(`${APIURL}/resident_card/user/${id}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

async function createResident_Card(
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

async function deleteResident_Card(id) {

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

async function editResidentCard(
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

const register = async (username, password) => {

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

const login = async (username, password) => {
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

// updates

async function updateApprovalDocs(
    id,
    sent_approval_docs
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/approvaldocs`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sent_approval_docs: sent_approval_docs,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateSentLease(
    id,
    sent_lease
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/leasesent`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sent_lease: sent_lease,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateReceivedElectric(
    id,
    received_electric
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/receivedelectric`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                received_electric: received_electric,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}


async function updateReceivedInsurance(
    id,
    received_insurance
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/receivedinsurance`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                received_insurance: received_insurance,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateReceivedSignedLease(
    id,
    received_signed_lease
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/receivedsignedlease`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                received_signed_lease: received_signed_lease,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateReceivedPayment(
    id,
    received_payment
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/receivedpayment`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                received_payment: received_payment,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateNotes(
    id,
    notes
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/notes`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                notes: notes,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

async function updateMovedIn(
    id,
    moved_in
) {
    try {

        const res = await fetch(`${APIURL}/resident_card/${id}/movedin`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                moved_in: moved_in,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}


module.exports = {
    login,
    register,
    editResidentCard,
    createResident_Card,
    getAllResident_Cards,
    getResidentCardsByUserId,
    deleteResident_Card,
    updateApprovalDocs,
    updateSentLease,
    updateReceivedElectric,
    updateReceivedInsurance,
    updateReceivedSignedLease,
    updateReceivedPayment,
    updateNotes,
    updateMovedIn
};